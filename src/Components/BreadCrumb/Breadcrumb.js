import React from 'react'
const BreadCrumb = React.memo(props => {
    return (
        <>
            <div className='Heading-back-com text-white'>
                <div className='container '>
                    <div className='row align-items-center py-3'>
                        <div className='col-lg-9 col-md-6 col-sm-6'>
                            <h5 className='text-white'>{props.heading}</h5>
                        </div>
                        <div className='col-lg-3  col-md-6 col-sm-6 align-items-center'>
                            <nav aria-label="breadcrumb ">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item text-white"><i className="fa fa-home me-2"></i><a className="text-white" href={props.BC1Link}>{props.breadcrumb1}</a></li>
                                    <li className="breadcrumb-item" style={{display : props.breadcrumb2 ? '' : 'none'}}><a className="text-white" href={props.BC2Link}>{props.breadcrumb2}</a></li>
                                    <li className="breadcrumb-item" aria-current="page"><span className="text-muted">{props.breadcrumb3}</span></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})


export default BreadCrumb