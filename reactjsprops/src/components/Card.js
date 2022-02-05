import React from 'react';

export default function Card(props) {

    let status
    if(props.item.availability === "Available"){
        status = "Available";
    }else{
        status = "N/A";
    }
  return (
      <div className='card-list'>
        <section className='card'>
            <div className="card--badge">{status}</div>
            <img src={require(`../images/${props.item.imageUrl}`)} alt="" className='card--img'/>
            <div className='card--details'>
                <div><strong>ID: </strong>cards_job_{props.item.id}</div>
                <div><strong>Name:</strong> {props.item.title}</div>
                <div><strong>Profession:</strong> {props.item.profession}</div>
                <div><strong>Description:</strong> {props.item.description}</div>
            </div>
        </section>
    </div>
  );
}
