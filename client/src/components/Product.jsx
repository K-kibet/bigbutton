import React from 'react';

const Product = () => {
    return (
        <div className='card'>
            <div className="card-header">
                <div>
                <span><img src="https://assets.codepen.io/285131/figma.svg" alt="" /></span>
                <h3 className="title">Figma</h3>
                </div>
                
                <label class="toggle">
					<input type="checkbox" checked />
					<span></span>
				</label>
            </div>
            <div className='card-body'>
                Collaboration between designers and developers.
            </div>
            <hr />
            <div className="card-footer">
                <a href="#">View integration</a>
            </div>
        </div>
    );
}

export default Product;
