import Navbar from './Navbar';
import { connect } from 'react-redux';

const NavbarContainer = (props) => {
    return <Navbar {...props} />;
};

let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}

export default connect(mapStateToProps)(NavbarContainer);