import React, { useState } from 'react';
import '../style/modal.css'
export default function Modal({closeModal, messageModal}){
    return (
			<section className="modal">
				<div className="modal__content">
					<span className="modal__content__message">{messageModal}</span>
					<button className="button" onClick={closeModal}>
						Close
					</button>
				</div>
			</section>
		);
}
