'use strict';

/**
 * language-model service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::language-model.language-model');
