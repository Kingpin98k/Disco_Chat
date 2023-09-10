const mongoose = require('mongoose');

// Define the Organization schema
const OrganizationSchema = new mongoose.Schema({
  name: String,
  description: String,
});

// Create the Organization model
const OrganizationModel = mongoose.model('Organization', OrganizationSchema);

module.exports = OrganizationModel;
