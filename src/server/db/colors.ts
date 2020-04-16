import { Query } from './index';

const getColors = async () => {
    return Query('SELECT * FROM colors')
}

const getOneColor = async (id: number) => {
    return Query('SELECT * FROM colors WHERE id=?', [id])
}

const postColors = async (color: string) => {
    return Query('INSERT INTO colors(color) VALUES(?)',[color]);
}

export default {
    getColors,
    getOneColor,
    postColors
}