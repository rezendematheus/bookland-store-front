import styled from 'styled-components'

export const CartTable = styled.div`
    table{
        box-sizing: border-box;
        font-family: Roboto;
        width: 305px;
        border-collapse: collapse;
        border-radius: 10px;
        background-color: #E3C9F7;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-size: 14px;
        color: black;
    }
    thead{
        height: 22px;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
        th{
            text-align: center;
            padding: 10px;
            padding-right: 0px;
        }
        th:nth-child(1){
            text-align: start;
        }
    }
    tbody{
        tr{
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            td{
                height: 70px;
                text-align: center;
                min-width: 67px;
                vertical-align: middle;
                div{
                    width: 150px;
                    vertical-align: baseline;
                    display: flex;
                    text-align: start;
                    justify-content: center;
                    box-sizing: content-box;
                    padding: 10px;
                    padding-right: 0px;
                    img{
                        width: 53px;
                        height: 59px;
                        border-radius: 5px;
                        border: 1px solid rgba(0, 0, 0, 0.2);
                    }
                    p{
                        padding: 8px;
                        padding-right: 0px;
                    }
                }
                span{
                    display: inline-flex;
                    width:  24px;
                    height: 24px;
                    border-radius: 50%;
                    background-color: white;
                    text-align: center;
                    
                    p{
                        display: inline-flex;
                        width: 24px;
                        height: 24px;
                        justify-content: center;
                        align-items: center;
                    }
                }
            }
            
        }
        tr:last-child{
            border: none;
        }
    }
`