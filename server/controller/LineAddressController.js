const findAllLineAddress = async (req, res) => {
  try {
    const lineAddress = await req.context.models.address.findAll();
    return res.send(lineAddress);
  } catch (error) {
    return res.status(404).send(error);
  }
};
const findOneLineAddress = async (req, res) => {
  try {
    const lineAddress = await req.context.models.address.findOne({
      where: { addr_id: req.params.id },
    });
    return res.send(lineAddress);
  } catch (error) {
    return res.status(404).send(error);
  }
};

export default {
  findAllLineAddress,
  findOneLineAddress,
};
