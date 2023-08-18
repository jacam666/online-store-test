import React from 'react'
import {
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBRow,
} from "mdb-react-ui-kit";

function ReviewPage({ basketItems }) {

    const COLORS = {
        background: '#e1dddd',
    }
    
    return (
        <section className="h-100" style={{ backgroundColor: "#eee" }}>
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-md-10">
                        <h3 className="fw-normal mb-4 text-black">Review Your Items</h3>
                        {basketItems.map((item, index) => (
                            <div key={`${item.id}-${index}`} className="rounded-3 mb-4">
                                <MDBCardBody className="p-4">
                                    <MDBRow className="justify-content-between align-items-center">
                                        <MDBCol md="2" lg="2" xl="2">
                                            <MDBCardImage
                                                className="rounded-3 item-image "
                                                style={{ backgroundColor: COLORS.background }}
                                                fluid
                                                src={item.image}
                                                alt={item.name}
                                            />
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ReviewPage