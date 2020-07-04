import express from 'express';
import Gateway from '.';
import Config from './config/config';

require('dotenv').config();

const app = express();

const config = new Config(process).getConfig();

const application = new Gateway(config, app);

application.initialise();
