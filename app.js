import Gateway from './core';
import Config from './core/config/config';

require('dotenv').config();
const express = require('express');

const app = express();

const config = new Config(process).getConfig();

const application = new Gateway(config, app);

application.initialise();
