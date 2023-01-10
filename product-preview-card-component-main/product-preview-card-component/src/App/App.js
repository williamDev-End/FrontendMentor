
import React from 'react';
import '../App/styles.scss';
import parfumimg from '../images/image-product-desktop.jpg';


const App = () => (

    <div className="App">
      <header className="App-header">

       <article className= "article">
        <img src={ parfumimg }className="article-img" alt="parfum" />
        <section className='article-section'>
        <h3>PERFUMS</h3>

       <h2 className='Parfum-title'>Gabrielle Essence Eau De Parfum</h2>
        
          <dfn className='description'>
              A floral, solar and voluptuous interpretation composed by Olivier Polge, 
            Perfumer-Creator for the House of CHANEL.
          </dfn>

            <div className='price'> $149.99 </div>

              <div className='oldPrice'> $169.99 </div>
           
            <div className='addCart'> Add to Cart </div>

        </section>
</article>
       
      </header>
    </div>

)
  
  

export default React.memo(App);
