import { Avatar, IconButton } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { pink } from "@mui/material/colors";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';  // Import Badge
import "./NavBar.css"
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='px-5 sticky top-0 z-[50] py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>
            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                <ul>
                    <li className="logo font-semibold text-gray-300 text-2xl">
                        Bhojnalya
                    </li>
                </ul>
            </div>
            <div className='flex items-center space-x-2 lg:space-x-10'>
                <div>
                    <IconButton>
                        <SearchIcon sx={{ fontSize: "1.5rem" }} />
                    </IconButton>
                </div>

                <div className="">
                  {false ?  <Avatar sx={{ bgcolor: "white", color: pink.A400 }}>N</Avatar>:
                  <IconButton onClick={()=>navigate("/account/login")}>
                    <Person/>
                    </IconButton>}
                </div>

                <div>
                    <IconButton>
                    <Badge badgeContent={4} color="secondary">
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                      </Badge>
                    </IconButton>
                </div>
            </div>
        </div>
    );
}
