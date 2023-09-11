const Organization = require('../models/orgModel');
const Room = require('../models/roomModel')
const appError = require('../utils/appError')

// Create a new organization
exports.createOrganization = async (req, res, next) => {
  try {
    if(!req.body.name) {
        return next(new appError('Name is required',400))
    }
    const organization = await Organization.create(req.body)
    res.status(201).json({ message: 'Organization created successfully', organization });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to create organization' });
  }
};

// Get all organizations
exports.getAllOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find();
    res.status(200).json(organizations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to retrieve organizations' });
  }
};

// Get organization by ID
exports.getOrganizationById = async (req, res) => {
  try {
    const organization = await Organization.findById(req.params.id);
    if (!organization) {
      return res.status(404).json({ error: 'Organization not found' });
    }
    // Find rooms associated with the organization
    const rooms = await Room.find({ organization: organization._id }).select('_id name');
    // Attach the rooms to the organization object
    const newOrg = { organization };
    newOrg.rooms = rooms
    res.status(200).json({status:"Successful",organization:newOrg});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to retrieve organization' });
  }
};

// Update organization by ID
exports.updateOrganizationById = async (req, res) => {
  try {
    const { name, description } = req.body;
    const organization = await Organization.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true } // Return the updated organization
    );
    if (!organization) {
      return res.status(404).json({ error: 'Organization not found' });
    }
    res.status(200).json({ message: 'Organization updated successfully', organization });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to update organization' });
  }
};

// Delete organization by ID
exports.deleteOrganizationById = async (req, res) => {
  try {
    const organization = await Organization.findByIdAndDelete(req.params.id);
    if (!organization) {
      return res.status(404).json({ error: 'Organization not found' });
    }
    res.status(200).json({ message: 'Organization deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to delete organization' });
  }
};
