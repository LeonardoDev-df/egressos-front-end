import styles from './Home.module.css'
import savings from '../../img/sisaemain.png'
import grafics from '../../img/grafico.png'
import Select from 'react-select'

import LinkButton from '../layout/LinkButton'

function Home() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <>
    <section className={styles.home_container}>
      <img src={savings} alt="Savings" />

      <div>
        <p>
        Seja bem-vindo ao SISAE, a plataforma de dados do Instituto Federal de Brasília. 
        O sistema foi concebido de forma que qualquer servidor, estudante ou cidadão possa 
        ter acesso aos dados da Instituição. Nosso propósito é que esta plataforma seja um instrumento de gestão
         e de transparência pública.
        </p>
      </div>
      <div>
        <p>
        O SISAE está estruturado em módulos de informações, que podem ser acessados na barra de 
        navegação lateral. Dentro de cada módulo apresenta-se um conjunto de estatísticas disponibilizadas 
        de maneira que o usuário possa interagir.
        </p>
      </div>
    </section>

    <hr
        style={{
          background: '#ABA8A8',
          color: '#ABA8A8',
          height: '10px',
          width: '140%'
        }}
      />
    
    <section className={styles.home_container}>
    
    <div className={styles.buttom}>
      <button className={styles.buttons}>ENSINO MÉDIO INTEGRADO</button>
      <button className={styles.buttons}>TÉCNICO SUBSEQUENTE</button>
      <button className={styles.buttons}>SUPERIOR (EM CONSTRUÇÃO)</button>  
    </div>

    <div className={styles.buttomCheck}>
      <label className={styles.check}>
        <input type="checkbox" />
        EDUCAÇÃO
      </label>
      <label className={styles.check}>
        <input  type="checkbox" />
        EMPREGRABILIDADE
      </label>
      <label className={styles.check}>
        <input type="checkbox" />
        AVALIAÇÃO E EXPECTATIVAS
      </label>
    </div>


    <div className={styles.sidemain}>
      <button className={styles.sidebuttom}>
        FILTROS
      </button>
      <div  className={styles.sideSelect}>
        <Select options={options} placeholder="ANO" />
      </div>
      <div className={styles.sideSelect}>
        <Select  options={options} placeholder="CAMPUS" />
      </div>
      <div className={styles.sideSelect}>
        <Select options={options}  placeholder="EIXO TECNOLÓGICO" />
      </div>
      <div className={styles.sideSelect}>
        <Select options={options} placeholder="CURSO" />
      </div >
      <button className={styles.sidebuttom}>
        SELEÇÕES
      </button>
    </div>

    <div className={styles.span}>
      <span>ENSINO MÉDIO INTEGRADO - EDUCAÇÃO</span>
    </div>
    <div className={styles.graficos}>
      <img  src={grafics} alt="Grafico" />
    </div>
    
  </section>
  </>
  )
}

export default Home
