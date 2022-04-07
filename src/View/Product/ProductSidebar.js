import React, { useState } from 'react'
import { BEERCategory, Brand, LiquorCategory, Size, WineCategory } from '../../assets/Data/data';
import { Accordion } from 'react-bootstrap'

const ProductSidebar = (props) => {
    //Range Slider variable
    const [rangevalue, setValue] = useState(0);
    const handleRange = (value11) => {
        setValue(value11)
        console.log(value11);
    }
    //Size variable
    const handleSize = (values1) => {
        props.GetDataBySizes(values1)
    }
    //Brand variable
    const handleBrand = (values2) => {
        console.log(values2);
    }

    return (
        <div className='shadow py-4 px-3 shoplistbox'>
            <button className='mb-2 text-nowrap all-data' style={{ border: "none", background: "none" }}
                onClick={props.GetAllDatas}>
                <h4 className='shoplist1-catetxt'>ALL Products</h4>
            </button>
            <div className='mb-2'>
                <h4 className='shoplist1-catetxt'>Categories</h4>
            </div>
            {/* start Categories */}
            <div className='border-bottom'>
                <Accordion>
                    <Accordion.Item eventKey="0" style={{ border: 'none' }}>
                        <Accordion.Header>Wine({WineCategory.length})</Accordion.Header>
                        <Accordion.Body className='px-1'>
                            <form className="shoplistsearch-bar">
                                <input type="search" placeholder="Search" />
                            </form>
                            <div className='shopsidebar-content'>
                                <ul className='shoplist-ul'>
                                    <li>
                                        <button className='shoplistitems d-flex justify-content-between align-items-center'
                                            onClick={() => props.GetDataByCategorys("wine")}>
                                            <span>All Wine</span>
                                        </button>
                                    </li>
                                    {
                                        WineCategory.map((c, i) => {
                                            return (
                                                <li key={i}>
                                                    <button className='shoplistitems d-flex justify-content-between align-items-center'
                                                        onClick={() => props.GetDataBySubcategorys(c)}>
                                                        <span>{c}</span>
                                                    </button>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" style={{ border: 'none' }}>
                        <Accordion.Header>Beer ({BEERCategory.length})</Accordion.Header>
                        <Accordion.Body className='px-1'>
                            <form className="shoplistsearch-bar">
                                <input type="search" placeholder="Search" />
                            </form>
                            <div className='shopsidebar-content'>
                                <ul className='shoplist-ul'>
                                    <li>
                                        <button className='shoplistitems d-flex justify-content-between align-items-center'
                                            onClick={() => props.GetDataByCategorys("Beer")}>
                                            <span>All Beer</span>
                                        </button>
                                    </li>
                                    {
                                        BEERCategory.map((b, i) => {
                                            return (
                                                <li key={i}>
                                                    <button className='shoplistitems d-flex justify-content-between align-items-center'
                                                        onClick={() => props.GetDataBySubcategorys(b)}>
                                                        <span>{b}</span><span></span>
                                                    </button>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" style={{ border: 'none' }}>
                        <Accordion.Header>Liquor ({LiquorCategory.length})</Accordion.Header>
                        <Accordion.Body className='px-1'>
                            <form className="shoplistsearch-bar">
                                <input type="search" placeholder="Search" />
                            </form>
                            <div className='shopsidebar-content'>
                                <ul className='shoplist-ul'>
                                    <li>
                                        <button className='shoplistitems d-flex justify-content-between align-items-center'
                                            onClick={() => props.GetDataByCategorys("liquor")}>
                                            <span>All Liquor</span>
                                        </button>
                                    </li>
                                    {
                                        LiquorCategory.map((w, i) => {
                                            return (
                                                <li key={i}>
                                                    <button className='shoplistitems d-flex justify-content-between align-items-center'
                                                        onClick={() => props.GetDataBySubcategorys(w)}>
                                                        <span>{w}</span><span></span>
                                                    </button>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            {/* End Categories */}
            {/* start Price */}
            <div className='mb-2 mt-3'>
                <h4 className='shoplist1-catetxt'>Price</h4>
            </div>
            <div className='border-bottom'>
                <div className='mx-3 mt-6'>
                    <input type='range'
                        className='range-bar w-100'
                        value={rangevalue}
                        onChange={e => handleRange(e.target.value)} />
                </div>

                <div className='d-flex pb-4 pt-2 mx-4'>
                    <div className='w-50 pe-2 me-2'>
                        <div className='input-group input-group-sm'>
                            <span className='input-group-text' style={{ backgroundColor: '#fff' }}>$</span>
                            <input className="form-control range-slider-value-min" defaultValue="0" />
                        </div>
                    </div>
                    <div className='w-50 ps-2'>
                        <div className='input-group input-group-sm'>
                            <span className='input-group-text' style={{ backgroundColor: '#fff' }}>$</span>
                            <input className="form-control range-slider-value-max" value={rangevalue} />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Price */}
            {/* start Brand */}
            <div className='mb-2 mt-3'>
                <h4 className='shoplist1-catetxt'>Brand</h4>
            </div>
            <div className='border-bottom'>
                <form className="shoplistsearch-bar">
                    <input type="search" placeholder="Search" />
                </form>
                <div className='shopsidebar-content'>
                    <ul className='shoplist-ul'>
                        {
                            Brand.map((b, i) => {
                                return (
                                    <li key={i}><div className='shoplistitems d-flex justify-content-between align-items-center'>
                                        <span><input className='form-check-input' type='checkbox' style={{ marginRight: '10px' }}
                                            value={b} defaultValue={b}
                                            onChange={(e) => handleBrand(e.target.value)} />{b}</span></div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            {/* End Brand */}
            {/* start Size */}
            <div className='mb-2 mt-3'>
                <h4 className='shoplist1-catetxt'>Size</h4>
            </div>
            <div className='border-bottom'>
                <form className="shoplistsearch-bar">
                    <input type="search" placeholder="Search" />
                </form>
                <div className='shopsidebar-content'>
                    <ul className='shoplist-ul'>
                        {
                            Size.map((s, i) => {
                                return (
                                    <li key={i}><div className='shoplistitems d-flex justify-content-between align-items-center'>
                                        <span>
                                            <input className='form-check-input' type='checkbox' style={{ marginRight: '10px' }}
                                                value="size" onChange={(e) => handleSize(e.target.name)} name={s} />
                                            {s}</span></div>
                                    </li>
                                )
                            }
                            )}
                    </ul>
                </div>
            </div>
            {/* End Size */}
        </div>
    )
}

export default ProductSidebar
