import app from './app';
import { config } from './config/env';
import { startFollowupJob } from './jobs/followup.job';

app.listen(config.port, () => {
  console.log(`🚀 Server running at http://localhost:${config.port}`);
  startFollowupJob();
});
