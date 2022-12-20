<template>
    <div class="modal-dialog modal__info">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title"> <slot name="modalTitle"></slot> </h5>
        </div>
        <div class="modal-body">
            <p> <slot name="modalBody"></slot> </p>
        </div>
        </div>
    </div>
</template>

<style>
.modal__info {
    border: 1px solid black;
    height: max-content;
    padding: 2px 50px;
    border-radius: 10px;
    cursor: pointer;

    background: white;

    position: fixed !important;
    top: -10%;
    left: 50%;
    transform: translateX(-50%);

    transition: .3s;
}

.active_modal {
    top: 10%;
}

</style>