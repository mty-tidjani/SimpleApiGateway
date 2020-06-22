require('dotenv').config();
import path from 'path';
import { format, createLogger, transports } from 'winston';
require('winston-daily-rotate-file');


const { combine, timestamp, printf } = format;

const myFormat = printf((info: any) => `${info.timestamp}  ${info.level}: ${info.message} ${info.stack ? `Stack: ${info.stack}` : ''}`);
const LOG_DIR = process.env.LOG_DIR || '';
const dir = path.join(__dirname, LOG_DIR);


const logger = createLogger({
  format: combine(
    timestamp(),
    myFormat,
  ),
  transports: [
    new transports.File({
      filename: '_error.log',
      level: 'error',
      dirname: dir,
    }),
    new transports.Console({
      debugStdout: true
    }),
    new transports.DailyRotateFile({
      filename: 'app.log',
      dirname: dir,
      maxsize: 20971520,
      maxFiles: 25,
      datePattern: 'YYYY_MM_DD',
    }),
  ],
});


export default logger;
