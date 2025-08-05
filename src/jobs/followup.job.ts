import cron from 'node-cron';
import prisma from '../prisma/client';

export function startFollowupJob() {
  cron.schedule('0 9 * * *', async () => {
    const today = new Date();

    const followups = await prisma.chatFollowup.findMany({
      where: {
        dateFor: { lte: today },
        notified: false,
      },
      include: { 
        user: {
          include: { profile: true }
        }
      },
    });

    for (const entry of followups) {
      const { id, userId, diseaseMentioned, user } = entry;

      await prisma.notification.create({
        data: {
          userId,
          title: `Hey ${user.profile?.name ?? 'there'}, how have you been?`,
          message: `You mentioned yesterday that you were feeling ${diseaseMentioned}.`,
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
