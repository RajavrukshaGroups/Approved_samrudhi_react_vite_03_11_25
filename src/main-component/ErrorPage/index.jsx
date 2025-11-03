import React, {Fragment} from 'react'
import Header from '../../components/header/index.jsx'
import PageTitle from '../../components/pagetitle/index.jsx'
import Error from '../../components/404/index.jsx'
import Footer from '../../components/footer/index.jsx'


const ErrorPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle PageTitle={'ERROR'} pagesub={'404 Notfound'}/> 
            <Error/>
            <Footer/>
        </Fragment>
    )
};
export default ErrorPage;

