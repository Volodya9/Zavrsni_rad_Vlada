<template>
    <div class="container">
        <h2>About Qatar</h2>
        <div class="about-container">
            <div class="img-content">
                <img src="../images/qatar_site.jpg" alt="">
            </div>
            <div class="about-content">
                <h4>Info</h4>
                <table>
                    <tr><td>Capital: </td><td>Doha</td></tr>
                    <tr><td>Area: </td><td>11,581 km2</td></tr>
                    <tr><td>Population: </td><td>2,795,484</td></tr>
                </table>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, alias cum quas eligendi illum ratione eius iure nostrum, tenetur dicta nobis sunt? Dolores iure eaque nam ratione ex, adipisci beatae magnam aperiam, modi debitis, dolorem neque alias nostrum autem aliquam? Dolorem ipsum consequatur doloremque quod magnam voluptatum assumenda repellat. Aperiam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis fuga esse ea, totam sequi optio non repudiandae officiis fugit ex sunt distinctio rerum modi hic iusto ipsum? At, perferendis.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatem vero ad tenetur voluptatum labore dolores, itaque a perspiciatis repellat quia quasi minima adipisci laborum repudiandae ut nihil magnam iste libero reprehenderit laboriosam unde corrupti eos numquam. Ex, exercitationem maiores.</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .about-container{
        display: flex;
        flex-direction: row;

        .img-content{
            width: 50%;
            padding: 10px;

            img{
                width: 100%;
                object-fit: contain;
                overflow: auto;
            }
        }

        .about-content{
            width: 50%;
            padding: 10px;

            h4{
                font-size: 18px;
                font-weight: bold;
                margin: 10px;
            }

            table{
                margin: 10px;
                
                td{
                    padding: 3px;
                }
            }

            p{                
                line-height: 24px;
                margin: 10px;
            }
        }
    }
</style>