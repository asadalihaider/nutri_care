import cron from 'node-cron';
import prisma from '../../prisma/client';

export function startFollowupJob() {
  cron.schedule('0 9 * * *', async () => {
    const today = new Date();

    const followups = await prisma.chatFollowup.findMany({
      where: {
        dateFor: { lte: today },
        notified: false,
      },
      include: { user: true },
    });

    for (const entry of followups) {
      const { id, userId, message, user } = entry;

      const simplified = message.length > 50 ? 'that you weren’t feeling well' : `that you were feeling ${message}`;

      await prisma.notification.create({
        data: {
          userId,
          title: `Hey ${user.name}, still feeling okay?`,
          message: `You mentioned yesterday ${simplified}. How have you been?`,
        },
      });

      await prisma.chatFollowup.update({
        where: { id },
        data: { notified: true },
      });
    }

    console.log(`[Cron] Processed ${followups.length} follow-ups`);
  });
}
