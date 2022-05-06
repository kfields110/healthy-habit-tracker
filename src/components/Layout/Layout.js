import { Fragment } from 'react'
import Header from './Header'
import classes from './Layout.module.css'

//Small component that allows to display header dynamically
const Layout = (props) => {
    
    return (
        <Fragment>
            <Header />
            <main className={classes.name}>{props.children}</main>
        </Fragment>
    )
}

export default Layout;