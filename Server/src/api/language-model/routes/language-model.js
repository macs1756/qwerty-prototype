'use strict';

/**
 * language-model router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::language-model.language-model');
