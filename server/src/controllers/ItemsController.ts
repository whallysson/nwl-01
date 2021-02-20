import { Request, Response } from 'express';
import knex from '../database/connections';

// index(): listagem de dados
// show(): listar um único dado
// create() or store(): inserir um dado
// update(): atualizar um dado
// delete() or destroy(): excluir um dado

// async show(request: Request, response: Response) { return response.json({ ok: true }); }

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.0.120:3333/uploads/${item.image}`
      }
    });

    return response.json(serializedItems);
  }
}

export default ItemsController;