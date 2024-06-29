const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    end_year: { type: Schema.Types.Mixed, default: '' },
    intensity: { type: Number, default: 0 },
    sector: { type: String, default: '' },
    topic: { type: String, default: '' },
    insight: { type: String, default: '' },
    url: { type: String, default: '' },
    region: { type: String, default: '' },
    start_year: { type: Schema.Types.Mixed, default: '' },
    impact: { type: String, default: '' },
    added: { type: String, default: '' },
    published: { type: String, default: '' },
    country: { type: String, default: '' },
    relevance: { type: Number, default: 0 },
    pestle: { type: String, default: '' },
    source: { type: String, default: '' },
    title: { type: String, default: '' },
    likelihood: { type: Number, default: 0 }
});

const DataModel = mongoose.model('insights', dataSchema);

module.exports = DataModel;
