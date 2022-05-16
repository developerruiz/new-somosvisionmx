import React from "react";

const Header = () => {


        let burger_menu =  document.getElementById('burger_menu')
        let slideMenu = document.getElementById('slideMenu')
        let menuActivo = false
        let icon_menu = document.querySelector('.fa.fa-bars')

    
    // objeto con metodos
    var metMenu = {
    
    
        inicio: function(){
    
            burger_menu.addEventListener('click', metMenu.toggleMenu);
        },
    
        toggleMenu: function(){
    
            
            if(menuActivo === false){
                burger_menu.style.transform= 'rotate(360deg)';
                icon_menu.className = 'fa-solid fa-xmark fs-4';
                burger_menu.style.transition= '.5s ease-in';
                menuActivo = true;
                slideMenu.className = slideMenu.className + ' active';
                
                
            }else{
                burger_menu.style.transform= 'rotate(0)';
                burger_menu.style.transition= '.5s ease-in';
                icon_menu.className = 'fa fa-bars fs-4';
                menuActivo = false;
                slideMenu.className = slideMenu.className.replace('active','');
                
            }
    
        },
    
    
    }
    
    metMenu.inicio();

    return (
        <>
      <header className="">
    <div className="menu-desktop container">
        <div className="co-lg-12 d-flex justify-content-between">

            <div className="col-lg-1  d-flex align-items-center">
                <div className="logo ">
                    <a href="index.php" aria-label="Inicio">
                  
                    </a>
                </div>
            </div>

            <div className="col-lg-10 d-flex m-0 p-0 justify-content-center ">


                <div className="list-menu">
                    <ul className="list list-unstyled d-flex  m-0 p-0">

                        <li>
                            <a href="index.php" className=" text-decoration-none px-3 color-white fs-5 item-menu">Inicio</a>
                        </li>
                        <li>
                            <a href="temp.php" className=" text-decoration-none px-3 color-white fs-5 item-menu">Comprar</a>

                        </li>

                        <li className="menu-hover">
                            <a href="tendencia.php"
                                className=" text-decoration-none mx-3 color-white fs-5 item-menu">Tendencias</a>


                        </li>

                        <li className="menu-hover">

                            <a className=" text-decoration-none mx-3 color-white fs-5 item-menu">Hazlo tu mismo</a>

                            <div className="megamenu-width shadow">
                                <div className="container">
                                    <div className="col-12 d-flex p-4">
                                        <div className="col-lg-12">
                                            <ul className="items-megamenu list-unstyled">
                                                <a href="blog.php">
                                                    <li className="py-3">

                                                        Blog

                                                        <div className="col-lg-12 op">


                                                        </div>

                                                    </li>
                                                </a>
                                                <a href="tips.php" className="text-decoration-none">
                                                    <li className="py-3 ">

                                                        Tips

                                                    </li>
                                                </a>
                                                <a href="tutoriales.php">
                                                    <li className="py-3">

                                                        Tutoriales

                                                        <div className="col-lg-12 op">


                                                        </div>

                                                    </li>
                                                </a>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="menu-hover">

                            <a className=" text-decoration-none mx-3 color-white fs-5 item-menu">Espacios</a>

                            <div className="megamenu shadow">

                                <div className="container">

                                    <div className="col-12 d-flex  flex-wrap justify-content-center p-4 espacios-megamenu">

                                        <div className="col-lg-3 m-3 text-center d-flex justify-content-center">

                                            <a href="fachadas.php" className="">
                                                <div className="img-fachada">

                                                </div>
                                                <div className="card-body">
                                                    <h6>Fachadas</h6>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="col-lg-3 m-3 text-center d-flex justify-content-center">


                                            <a href="sala.php" className="">
                                                <div className="img-sala">

                                                </div>
                                                <div className="card-body">
                                                    <h6>Sala</h6>
                                                </div>
                                            </a>

                                        </div>
                                        <div className="col-lg-3 m-3 text-center d-flex justify-content-center">

                                            <a href="comedor.php">
                                                <div className="img-comedor">

                                                </div>
                                                <div className="card-body">
                                                    <h6>Comedor</h6>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="col-lg-3 m-3 text-center d-flex justify-content-center">

                                            <a href="cocina.php" className="">
                                                <div className="img-cocina">

                                                </div>
                                                <div className="card-body">
                                                    <h6>Cocina</h6>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 m-3 text-center d-flex justify-content-center">

                                            <a href="habitaciones.php" className="">
                                                <div className="img-habitaciones">

                                                </div>
                                                <div className="card-body">
                                                    <h6>Habitaciones</h6>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 m-3 text-center d-flex justify-content-center">

                                            <a href="bano.php" className="">
                                                <div className="img-bano">

                                                </div>
                                                <div className="card-body">
                                                    <h6>Baño</h6>
                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>

                   
                    </ul>
                </div>


            </div>

            <div className="col-lg-1 d-flex justify-content-end align-items-center ">
         
                <i className="fa-solid fa-cart-shopping fs-2 color-black"></i>

            </div>

        </div>

    </div>
    <div className="menu-bar-movil d-flex justify-content-between">

        <div className="logo-menu-movil">
            <a href="index.php" aria-label="Inicio">
              
            </a>
        </div>
        <div className="burger-menu" id="burger_menu">
            <i className="fa fa-bars fs-4" aria-hidden="true"></i>
        </div>

        <div className="slideMenu overflow-auto" id="slideMenu">



            <nav className="menu-principal mb-5">
                <a href="index.php" className="link-dark text-decoration-none mx-1 ">Inicio</a>

                <a href="temp.php" className="link-dark text-decoration-none mx-1 ">Comprar</a>
                <a href="tendencia.php" className="link-dark text-decoration-none mx-1 ">Tendencias</a>
              
                    <a className="btn btn-toggle rounded collapsed text-start" data-bs-toggle="collapse"
                        data-bs-target="#hazlo-tu-mismo" aria-expanded="false">
                        <i className="fa-solid fa-angle-right"></i> Hazlo tu mismo
                    </a>

                    <div className="collapse" id="hazlo-tu-mismo">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 ps-4 small">
                            <li><a href="blog.php" className="link-dark rounded">Blog</a></li>
                            <li><a href="tips.php" className="link-dark rounded">Tips</a></li>
                            <li><a href="tutoriales.php" className="link-dark rounded">Tutoriales</a></li>
                        </ul>
                    </div>
           

                    <a className="btn btn-toggle rounded collapsed text-start" data-bs-toggle="collapse"
                        data-bs-target="#espacios" aria-expanded="false">
                        <i className="fa-solid fa-angle-right"></i> Espacios
                    </a>
                    
                    <div className="collapse" id="espacios">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 ps-4 small">
                            <li><a href="fachadas.php" className="link-dark rounded">Fachada</a></li>
                            <li><a href="sala.php" className="link-dark rounded">Sala</a></li>
                            <li><a href="comedor.php" className="link-dark rounded">Comedor</a></li>
                            <li><a href="cocina.php" className="link-dark rounded">Cocina</a></li>
                            <li><a href="habitaciones.php" className="link-dark rounded">Habitaciones</a></li>
                            <li><a href="bano.php" className="link-dark rounded">Baño</a></li>
                        </ul>
                    </div>

              
            </nav>

           

        </div>
    </div>

</header>
        </>
    )

}

export default Header