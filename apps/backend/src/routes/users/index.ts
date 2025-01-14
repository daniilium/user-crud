import { FastifyPluginAsync } from 'fastify'
import { getUsers } from '../../modules/users/user.services.js'

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return getUsers()
  })
}

export default example
