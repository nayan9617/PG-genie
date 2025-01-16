const baseJoi = require('joi');
const sanitizeHTML = require('sanitize-html');

const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHTML(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value })
                return clean;
            }
        }
    }
});

const Joi = baseJoi.extend(extension);

module.exports.pgSchema = Joi.object({
    PG : Joi.object({
        title: Joi.string().required().escapeHTML(),
        price: Joi.number().required().min(0),
        owner: Joi.object({
            name: Joi.string().required().escapeHTML(),
            phone: Joi.number().required(),
        }),
        location: Joi.string().required().escapeHTML(),
        // image: Joi.string().required(),
        description: Joi.string().required().escapeHTML(),
        furniture: Joi.boolean(), // Added
        attachedBath: Joi.boolean(), // Added
        waterSupply: Joi.boolean(), // Added
        geyser: Joi.boolean(), // Added
        wifi: Joi.boolean(), // Added
        backupPower: Joi.boolean(), // Added
        cctv: Joi.boolean(), // Added
        washingMachine: Joi.boolean(), // Added
        petFriendly: Joi.boolean(),
    }).required(),
    deleteImages: Joi.array()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        body: Joi.string().required().escapeHTML()
    }).required()
})