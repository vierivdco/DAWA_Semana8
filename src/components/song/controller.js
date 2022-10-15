import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async (_req, res) => {
    try {
        const songs = await prisma.song.findMany();
        
        res.json({
            ok : true,
            data: songs,
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            data: error.message,
        });
    }
};

const findOne = async (id) => {
    try {
        return await prisma.song.findFirst({ where: { song } });
    } catch (error) {
        return null;
    }
};

export const store = async (req, res) => {
    try {
        const { body } = req;

        const songById = await findOne(body.id);

        if (songById) {
            return res.json({
                ok: true,
                data: songById,
            });
        }
        
        const song = await prisma.song.create({
            data: {
                ...body,
            },
        });

        res.status(201).json({
            ok: true, 
            data: song,
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            data: error.message,
        });
    }
};