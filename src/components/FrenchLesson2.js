import react from "react";
import {Link} from "react-router-dom";
import '../App.css';
function FrenchLesson2(){
    return(
        <div class="body">
             <nav class="navbar bg-info">
      <Link to="/" class="navbar-brand mx-3">Language Learning</Link>
     <div class="nav ">
           
           <Link to="/french" class="nav-link">Logout</Link>
      </div>
      </nav>
            <div >
            <h1 class="text-center text-danger" >Les salutations(Greetings)</h1>
            <table class="table-outline mx-auto ">
                <thead class="head">
                        <tr>
                        <th>French</th>
                        <th>English</th>
                        </tr>
                    
                </thead>
                <tbody class="tbody">
                    <tr>
                    <td>Salut</td>
                    <td>Hi</td>
                    </tr>
                    <tr>
                    <td>Bienvenue</td>
                    <td>Welcome</td>
                    </tr>
                    <tr>
                    <td>Bonjour</td>
                    <td>Good day (greeting)</td>
                    </tr>
                    <tr>
                    <td>Bonsoir</td>
                    <td>Good evening/night (greeting)</td>
                    </tr>
                    <tr>
                        <td>Bonne journée</td>
                        <td>Good day (farewell)</td>
                    </tr>
                    <tr>
                        <td>Bonne soirée</td>
                        <td>Good evening/night (farewell)</td>
                    </tr>
                    <tr>
                        <td>Bonne nuit</td>
                        <td>Good night (farewell)</td>
                    </tr>
                    <tr>
                        <td>Comment allez-vous ?</td>
                        <td>How are you? formal</td>
                    </tr>
                    <tr>
                        <td>Comment vas-tu ?</td>
                        <td>How are you? informal</td>
                    </tr>
                    <tr>
                        <td>-Bien</td>
                        <td>-good</td>
                    </tr>
                    <tr>
                        <td>-Pas mal</td>
                        <td>-not bad</td>
                    </tr>
                    <tr>
                        <td>Ça va ? (familier)</td>
                        <td>How's it going? informal</td>
                    </tr>
                    <tr>
                        <td>-Oui, ça va. (familier)</td>
                        <td>It's going well.</td>
                    </tr>
                    <tr>
                        <td>-Ça (ne) va pas. (familier)</td>
                        <td>It's not going too well</td>
                    </tr>
                    <tr>
                        <td>Au revoir</td>
                        <td>Goodbye (See you later)</td>
                    </tr>
                    <tr>
                        <td>À bientôt</td>
                        <td>See you soon</td>
                    </tr>

                    <tr>
                        <td>À tout à l'heure</td>
                        <td>See you soon</td>
                    </tr>
                    <tr>
                        <td>S'il vous plaît</td>
                        <td>Please (informal)</td>
                    </tr>
                    <tr>
                        <td>s'il te plaît</td>
                        <td>Please</td>
                    </tr>
                    <tr>
                        <td>Merci</td>
                        <td>Thank you</td>
                    </tr>
                    <tr>
                        <td>De rien</td>
                        <td>You're welcome</td>
                    </tr>
                    <tr>
                        <td>Excusez-moi</td>
                        <td>Excuse me (asking a question)</td>
                    </tr>
                    <tr>
                        <td>Excuse-moi</td>
                        <td>Please</td>
                    </tr>
                    <tr>
                        <td>Pardon</td>
                        <td>Excuse me - bumping into someone, or moving through people</td>
                    </tr>
                    <tr>
                        <td>Félicitations</td>
                        <td>Congratulations</td>
                    </tr>
                    <tr>
                        <td>Bonne chance</td>
                        <td>Good luck</td>
                    </tr>

                </tbody>
            </table>
        </div>
        </div>
    )
}
export default FrenchLesson2;