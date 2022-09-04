const findAllSuperAddress = async (req, res) => {
  try {
    const usersAddress = await req.context.models.users_address.findAll({
      include: [
        {
          model: req.context.models.address,
          as: "etad_addr",
          include: {
            model: req.context.models.city,
            as: "addr_city",
          },
        },
        {
          model: req.context.models.address_type,
          as: "etad_adty",
        },
      ],
    });
    return res.send(usersAddress);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const findAllAddress = async (req, res) => {
  try {
    const usersAddress = await req.context.models.users_address.findAll({
      where: { etad_entity_id: req.params.id },
      include: [
        {
          model: req.context.models.address,
          as: "etad_addr",
          include: {
            model: req.context.models.city,
            as: "addr_city",
          },
        },
        {
          model: req.context.models.address_type,
          as: "etad_adty",
        },
      ],
    });
    return res.send(usersAddress);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const findOneAddress = async (req, res) => {
  try {
    const usersAddress = await req.context.models.users_address.findOne({
      where: {
        etad_entity_id: req.params.id,
        etad_addr_id: req.params.address,
      },
      include: [
        {
          model: req.context.models.address,
          as: "etad_addr",
          include: {
            model: req.context.models.city,
            as: "addr_city",
          },
        },
        {
          model: req.context.models.address_type,
          as: "etad_adty",
        },
      ],
    });
    return res.send(usersAddress);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const createAddress = async (req, res, next) => {
  try {
    const address = await req.context.models.address.create({
      addr_line1: req.body.addr_line1,
      addr_line2: req.body.addr_line2,
      addr_postal_code: req.body.addr_postal_code,
      addr_modified_date: new Date(),
      addr_city_id: req.body.addr_city_id,
    });
    req.address = address;
    next();
  } catch (error) {
    return res.status(404).send(error);
  }
};
const createUserAddress = async (req, res) => {
  const etad_addr = req.address;
  try {
    const users_address = await req.context.models.users_address.create({
      etad_addr_id: etad_addr.addr_id,
      etad_modified_date: new Date(),
      etad_entity_id: req.body.etad_entity_id,
      etad_adty_id: req.body.etad_adty_id,
    });
    return res.send({ users_address, etad_addr });
  } catch (error) {
    return res.status(404).send(error);
  }
};

const deletedAddress = async (req, res, next) => {
  try {
    const deletedAddress = await req.context.models.address.destroy({
      where: { addr_id: req.params.id },
    });
    req.address = deletedAddress;
    next();
  } catch (error) {
    return res.status(404).send(error);
  }
};

const deletedUserAddress = async (req, res) => {
  const checkAddress = req.address;
  try {
    const deletedUserAddress = await req.context.models.users_address.destroy({
      where: { etad_addr_id: req.params.id },
    });
    return res.send(`Deleted Success`);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const updateAddress = async (req, res, next) => {
  try {
    const address = await req.context.models.address.update(
      {
        addr_line1: req.body.addr_line1,
        addr_line2: req.body.addr_line2,
        addr_postal_code: req.body.addr_postal_code,
        addr_spatial_location: req.body.addr_spatial_location,
        addr_modified_date: new Date(),
        addr_city_id: req.body.addr_city_id,
      },
      { returning: true, where: { addr_id: req.params.id } }
    );
    req.address = address;
    next();
  } catch (error) {
    return res.status(404).send(error);
  }
};
const updateUserAddress = async (req, res) => {
  const etad_addr = req.address;
  try {
    const users_address = await req.context.models.users_address.update(
      {
        etad_addr_id: etad_addr.addr_id,
        etad_modified_date: new Date(),
        etad_entity_id: req.body.etad_entity_id,
        etad_adty_id: req.body.etad_adty_id,
      },
      { returning: true, where: { etad_addr_id: req.params.id } }
    );
    return res.send({ users_address, etad_addr });
  } catch (error) {
    return res.status(404).send(error);
  }
};

export default {
  findAllSuperAddress,
  findAllAddress,
  findOneAddress,
  createAddress,
  createUserAddress,
  updateAddress,
  updateUserAddress,
  deletedAddress,
  deletedUserAddress,
};
