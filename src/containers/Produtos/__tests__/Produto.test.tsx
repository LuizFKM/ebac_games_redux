import Produtos from '..'
import { renderizaComProvider } from '../../../utils/tests'

const mocks = [
  {
    id: 1,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['Windows'],
    preco: 150.9,
    precoAntigo: 199.9,
    titulo: 'Elden Ring'
  },
  {
    id: 2,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['Windows', 'PS5'],
    preco: 199.9,
    precoAntigo: 250.9,
    titulo: 'Hogwarts'
  },
  {
    id: 3,
    categoria: 'Ação',
    imagem: '',
    plataformas: ['Windows'],
    preco: 150.9,
    precoAntigo: 200,
    titulo: 'Gotham Knights'
  },
  {
    id: 4,
    categoria: 'Aventura',
    imagem: '',
    plataformas: ['Windows', 'PS5'],
    preco: 130,
    precoAntigo: 180,
    titulo: 'Skyrim'
  }
]

describe('Testes para o container produtos', () => {
  test('Deve renderizar corretamente', () => {
    const { debug } = renderizaComProvider(<Produtos />)
    debug()
  })
})
