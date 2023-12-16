import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'
import { favoritar } from '../store/reducers/favoritos'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            favoritar={() => favoritar(produto)}
            estaNosFavoritos={false}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
