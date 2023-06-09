async function feed(parent, args, context, info) {
    const where = args.filter
      ? {
          OR: [
            { usuario: { contains: args.filter } },
            { modelo: { contains: args.filter } },
            { prompt: { contains: args.filter } },
            { fecha: { contains: args.filter } }
          ]
        }
      : {};
  
    const usuarios = await context.prisma.usuario.findMany({
      where,
      skip: args.skip,
      take: args.take,
      orderBy: args.orderBy
    });
  
    const count = await context.prisma.usuario.count({ where });
  
    return {
      id: 'main-feed',
      usuarios,
      count
    };
  }
  
  module.exports = {
    feed
  };
  