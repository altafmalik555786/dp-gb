import React from 'react'
import logoBlack from "../Assets/images/logo-black.png"
import { Link } from "react-router-dom"
function Invoice() {
    return (
        <div>
            <section class="invoice-area padding-top-80px">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 mx-auto">
                            <div class="block-card">
                                <div class="block-card-header d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="invoice-logo">
                                        <img src={logoBlack} alt="logo" />
                                    </div>
                                    <h2 class="widget-title pb-0 font-size-30 line-height-30">Invoice</h2>
                                </div>
                                <div class="block-card-body">
                                    <div class="invoice-item mb-5">
                                        <ul class="list-items text-right">
                                            <li class="mb-1"><span class="text-color font-weight-semi-bold">Order:</span> #00123</li>
                                            <li class="mb-1"><span class="text-color font-weight-semi-bold">Date:</span> 22/03/2020</li>
                                            <li class="mb-1">Due 7 days from date of issue</li>
                                        </ul>
                                    </div>
                                    {/* <!-- end invoice-item --> */}
                                    <div class="invoice-item">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="invoice-info">
                                                    <h3 class="widget-title pb-2">Author:</h3>
                                                    <ul class="list-items">
                                                        <li class="mb-1">Listhub Ltd.</li>
                                                        <li class="mb-1">36 Edgewater Street, Melbourne, AU</li>
                                                        <li class="mb-1">Australia, CF44 6ZL, AU</li>
                                                    </ul>
                                                </div>
                                                {/* <!-- end invoice-info --> */}
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-6">
                                                <div class="invoice-info">
                                                    <h3 class="widget-title pb-2">To:</h3>
                                                    <ul class="list-items">
                                                        <li class="mb-1">Mark Wins</li>
                                                        <li class="mb-1">21 St Andrews Lane, London, UK</li>
                                                        <li class="mb-1">London, CF44 6ZL, UK</li>
                                                    </ul>
                                                </div>
                                                {/* <!-- end invoice-info --> */}
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                        </div>
                                        {/* <!-- end row --> */}
                                    </div>
                                    {/* <!-- end invoice-item --> */}
                                    <div class="invoice-item mt-5">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="my-table table-responsive">
                                                    <table class="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th>Description</th>
                                                                <th>Quantity</th>
                                                                <th>VAT</th>
                                                                <th>Amount</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Beef Dripping Glazed Steak</td>
                                                                <td>1</td>
                                                                <td>$1.0</td>
                                                                <td>$8.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Steak & Melted Cheese Brioche</td>
                                                                <td>1</td>
                                                                <td>$1.5</td>
                                                                <td>$8.00</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                {/* <!-- end table-responsive --> */}
                                            </div>
                                            {/* <!-- end col-lg-12 --> */}
                                            <div class="col-lg-3 ml-auto">
                                                <ul class="list-items list--items text-right">
                                                    <li><span class="text-color mr-3">Subtotal:</span> $16.00</li>
                                                    <li><span class="text-color mr-3">Discount:</span> -$2.00</li>
                                                    <li><span class="text-color mr-3">Total Amount:</span> $14.00</li>
                                                </ul>
                                                <p class="text-right font-weight-medium">Paid via PayPal</p>
                                            </div>
                                            {/* <!-- end col-lg-4 --> */}
                                        </div>
                                        {/* <!-- end row --> */}
                                    </div>
                                    {/* <!-- end invoice-item --> */}
                                </div>
                            </div>
                            {/* <!-- end block-card --> */}
                        </div>
                        {/* <!-- end col-lg-10 --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="btn-box mt-4 text-center">
                                <a href="javascript:window.print()" class="btn-gray mr-2">
                                    <i class="la la-print mr-2"></i>Print this Invoice
                                </a>
                                <Link to="/" class="btn-gray">
                                    <i class="la la-backward mr-2"></i>Back to Home
                                </Link>
                            </div>
                            {/* <!-- end btn-box --> */}
                        </div>
                        {/* <!-- end col-lg-12 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
        </div>
    )
}

export default Invoice