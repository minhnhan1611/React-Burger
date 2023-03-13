import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BaiTapBurger.css';
import { tangGiamAction } from '../Redux/Actions/BurgerActions';

class BaiTapBurger extends Component {

    renderBreadMid = () => {
        let { burger } = this.props;
        return Object.entries(burger).map(([propsBurger, value], index) => {

            let breadMid = [];
            for (let i = 0; i < value; i++) {
                breadMid.push(<div key={i} className={propsBurger}></div>)
            }

            return breadMid;
        })
    }

    renderMenu = () => {
        let { menu, burger } = this.props;
        return Object.entries(menu).map(([propsMenu, price], index) => {
            return (
                <tr style={{ marginLeft: 50 }} key={index}>
                    <td>{propsMenu}</td>
                    <td>
                        <button onClick={() => { this.props.tangGiam(propsMenu, 1) }} style={{ marginRight: 20 }} className='btn btn-success'>+</button>
                        {burger[propsMenu]}
                        <button onClick={() => { this.props.tangGiam(propsMenu, -1) }} style={{ marginLeft: 20 }} className='btn btn-danger'>-</button>
                    </td>
                    <td>{burger[propsMenu] * price}</td>
                </tr>

            )
        })
    }

    render() {
        return (
            <div className='container'>
                <h3 className="display-4 text-success text-center">Bài Tập Burger CyberLearn</h3>
                <div className="row">
                    <div className="col-7">
                        <h3 className='text-center text-danger'>Cửa hàng Burger CyberLearn</h3>
                        <div className="breadTop"></div>
                        {this.renderBreadMid()}
                        <div className="breadBottom"></div>
                    </div>
                    <div className="col-5">
                        <h3 className='text-center text-primary'>Chọn Thức ĂN</h3>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Thức Ăn</th>
                                    <th></th>
                                    <th>Giá</th>
                                </tr>
                                {this.renderMenu()}
                            </thead>
                            <tfoot>
                                <tr>
                                    <td colSpan={2}>Tổng cộng: </td>
                                    <td>{this.props.total}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        burger: state.BurgerReducer.burger,
        menu: state.BurgerReducer.menu,
        total: state.BurgerReducer.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        tangGiam: (propsBurger, amount) => {
            dispatch(tangGiamAction(propsBurger, amount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapBurger)
