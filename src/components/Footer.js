/**
 * Author: Carlos Galdona
 * Date: Decemeber 05, 2024
 */

import React from "react";
import { Container } from "react-bootstrap";

// Footer component definition
function Footer() {
    return ( 
        
        <footer>
            <Container fluid className="bg-dark text-white text-center p-3">
                {/* Footer content */}
                <p>
                    <a href="https://github.com/cgaldona">Carlos Galdona</a> 2024 Copyright ©
                </p>
            </Container>
        </footer>
    );
}

export default Footer;