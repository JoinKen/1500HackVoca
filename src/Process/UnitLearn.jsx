import React, { Component } from 'react';
class ListUnit extends Component {

    render() {
        return (
            <div>
                <div className="demo">
                    <nav className="pagination-outer" aria-label="Page navigation">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="true">begin</a></li>
                            <li className="page-item"><a className="page-link" href="true">1</a></li>
                            <li className="page-item"><a className="page-link" href="true">2</a></li>
                            <li className="page-item"><a className="page-link" href="true">3</a></li>
                            <li className="page-item"><a className="page-link" href="true">4</a></li>
                            <li className="page-item active"><a className="page-link" href="true">5</a></li>
                            <li className="page-item"><a className="page-link" href="true">6</a></li>
                            <li className="page-item"><a className="page-link" href="true">7</a></li>
                            <li className="page-item"><a className="page-link" href="true">8</a></li>
                            <li className="page-item"><a className="page-link" href="true">9</a></li>
                            <li className="page-item"><a className="page-link" href="true">11</a></li>
                            <li className="page-item"><a className="page-link" href="true">12</a></li>
                            <li className="page-item"><a className="page-link" href="true">13</a></li>
                            <li className="page-item"><a className="page-link" href="true">14</a></li>
                            <li className="page-item"><a className="page-link" href="true">15</a></li>
                            <li className="page-item"><a className="page-link" href="true">end</a></li>
                        </ul>
                    </nav>
                </div>

            </div>
        );
    }
}

export default ListUnit;