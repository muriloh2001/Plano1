import "./footer.css";
import { useLocation } from 'react-router-dom';

export default function Footer() {
    const location = useLocation();

    return (

              <footer class="bg-light  text-lg-start">

                <div className="container"></div>
                
                <div class="text-footer p-3">
                    © 2020 Copyright:
                    <a class="text-dark" href="https://about.meta.com/br//">Meta.com</a>
                </div>
               
                

                <div className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <div>Você está em: {location.pathname}</div> 
                </div>
            </footer>
        
    )
}