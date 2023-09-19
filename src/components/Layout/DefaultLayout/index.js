import Header from '../components/Header'
import Sidebar from './Sidebar/index.js'
import styles from './DefaultLatout.modules.scss'
import classNames from 'classnames';
const cx = classNames.bind(styles)

function DefaultLayout({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <Sidebar/>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;