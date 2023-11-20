import '../App.css';
import {Link} from 'react-router-dom';
function FrenchLesson4(){
    return(
       <div class="body vh-100% ">
          <nav class="navbar bg-info my-0" >
      <Link to="/" class="navbar-brand mx-3">Language Learning</Link>
     <div class="nav ">
           <Link to="/french" class="nav-link">Logout</Link>
      </div>
      </nav>
       <div class="body-with-padding">
       <div>
            <h1  class="text-primary">Les articles</h1>
            <h2  class="text-danger">Les articles définis </h2>
            <ul>
                <li>Le</li>
                <li>La</li>
                <li>Les</li>
                <li>I'</li>
            </ul>
            <h2 class="text-danger">Les articles indéfinis </h2>
            <ul>
                <li>Un</li>
                <li>Une</li>
                <li>Des</li>
            </ul>
        </div>
        <div>
            <h2 class="text-danger">Les articles définis - The definite article(the)</h2>
            <p>Le - Masculin. Exemple: le chat, le pantalon, le cahier</p>
            <p>La - Féminin. Exemple: la table, la chemise, la pomme</p>
            <p>Les - Pluriel. Exemple: Les chats, les pantalons, les pommes</p>
            <p>«Le/ la» changes to «l'» with words beginning with vowels «a,e,i,o, u». </p>
            <p>Exemple: l'âge, l'enfant, l'indien, l'oiseau, l'université</p>
        </div>
        <div>
            <h2 class="text-danger">How to identify feminine words?</h2>
            <p>The endings...</p>
            <p>-e</p>
            <p>-ion</p>
            <p>Exemple: la chaise, la table,la chemise, la télévision, la natation	</p>
            <h3 class="text-sucess">but...</h3>
            <p>Exceptions to the rule: le livre, le café, le portable, la maison, la cour,etc</p>
        </div>
        <div>
            <h2 class="text-danger">Les articles indéfinis - The indefinite article(a)</h2>
            <p>Un - Masculin. Exemple: un chat, un pantalon, un cahier</p>
            <p>Une - Féminin. Exemple: une table, une chemise, une pomme</p>
            <p>Des - Pluriel. Exemple: des chats, des pantalons, des pommes</p>
        </div>
       </div>
       </div>
    )
}
export default FrenchLesson4;