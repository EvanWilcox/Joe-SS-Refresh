const { GraphQLServer } = require('graphql-yoga');
const { PrismaClient } = require('@prisma/client');
const { address } = require('faker');
const prisma = new PrismaClient();

const resolvers = {
    Query: {
        info: () => "Backend up and ready",
        student: (parent, args, context) => {
            return context.prisma.student.findOne({
                where: {
                    id: parseInt(args.id)
                },
                include: {
                    advisor: true,
                    classes: true,
                    names: true,
                    addresses: true,
                    phonenumbers: true,
                    emails: true,
                    contacts: true,
                    finance: true,
                    actionItems: true
                }
            })
        },
        class: (parent, args, context) => {
            return context.prisma.class.findOne({
                where: {id: parseInt(args.id)}
            })
        },
        classes: (parent, args, context) => {
            return context.prisma.class.findMany({
                include: {teacher: true}
            });
        },
        teacher: (parents, args, context) => {
            return context.prisma.teacher.findOne({
                where: {id: parseInt(args.id)}
            })
        },
        announcements: (parents, args, context) => {
            return context.prisma.announcement.findMany({
                take: 4
            })
        },
    },
    Mutation: {
        createStudent: (parent, args, context) => {
            return context.prisma.student.create({
                data: {
                    name: args.name,
                    email: args.email,
                    advisor: {
                        connect: {
                            id: parseInt(args.advisorId)
                        }
                    }
                }
            })
        },
        updateStudent: (parent, args, context) => {
            return context.prisma.student.update({
                where: {
                    id: parseInt(args.id)
                },
                include: {advisor: true},
                data: {
                    name: args.name,
                    email: args.email,
                    advisor: {
                        connect: {
                            id: parseInt(args.advisorId)
                        }
                    }
                }

            })
        },
        addClassToStudent: (parent, args, context) => {
            return context.prisma.student.update({
                where: {id: parseInt(args.studentID)},
                include: {classes: true},
                data: {
                    classes: {
                        connect: {
                            id: parseInt(args.classID)
                        }
                    }
                }
            })
        },
        removeClassToStudent: (parent, args, context) => {
            return context.prisma.student.update({
                where: {id: parseInt(args.studentID)},
                include: {classes: true},
                data: {
                    classes: {
                        disconnect: {
                            id: parseInt(args.classID)
                        }
                    }
                }
            })
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: {
        prisma
    }
})

server.start(() => console.log('Server is running at http://localhost:4000'))
