import transactionRepository from "../repositories/transactionRepository.js";

async function create(body, id) {
  if (!id) throw new Error("User id is required");
  return await transactionRepository.create({ ...body, userId: id });
}

async function findAllByUser(id) {
  if (!id) throw new Error("User id is required");
  return await transactionRepository.findAllByUser(id);
}

export default { create, findAllByUser };
