import { config } from 'dotenv';
config();

const clientUrl = process.env.CLIENT_URL || '';
const localClientUrl = process.env.LOCAL_CLIENT_URL || '';

const allowList = [clientUrl, localClientUrl];

const corsOptions = {
  origin: allowList,
};

export default corsOptions;
