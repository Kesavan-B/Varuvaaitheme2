import React, { useState } from 'react'
import './PrdCrd.css'
import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { FaCartPlus } from "react-icons/fa";
import { Grid } from '@mui/material';
import { productCrd } from './PrdCrdData';
import { useNavigate } from 'react-router-dom';


function PrdCrd(props) {
  const navigate = useNavigate();

  const oneData = (e,data)=>{
    navigate(`/parms/${data?.id}`,{
      state:data
    })
  }

  return (
    <div className=' arrCrd-section'>
       <h1 className="newarrival-head">Products</h1>
       <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={5}
        >
          {productCrd &&
            productCrd.map((a,i) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                
                <Card style={{ width: "22rem" }} onClick={(e)=>oneData(e,a,i)}>
                    <div className="prod-stock">
                      <p className="stockss">{a.stock}</p>
                    </div>
                    <Card.Img variant="top" src={a.imag} style={{width:'100%',maxWidth:'260px'}}/>
                    <Card.Body>
                      <div className="crd-flex">
                        <div>
                          <Card.Title className="arrcrd-title">
                            {a.title}
                          </Card.Title>
                          <Card.Text className="arrcrd-text">
                            {a.price}
                          </Card.Text>
                        </div>
                        <div>
                          <FaCartPlus style={{ fontSize: "22px" }} />
                        </div>
                      </div>
                      <Stack spacing={1}>
                        <Rating name="size-small" size="small" />
                      </Stack>
                    </Card.Body>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
    </div>
  )
}

export default PrdCrd
