import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Typography } from "@material-ui/core";
import { useState } from "react";

const SearchForm = () => {
    const [equipment, setEquipment] = useState(0);
    const [location, setLocation] = useState(0);
    return (
        <div style={{
            margin: "20px",
            border: "1px solid",
            borderRadius: "10px",
            padding: "10px"
        }}>
            <Typography variant="body1">検索フォーム</Typography>
            <form>
                <div style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    margin: "20px"
                }}>
                    <FormControl variant="filled">
                        <InputLabel>設備名</InputLabel>
                        <Select label="設備名" value={equipment} onChange={(event) => setEquipment(event.target.value as number)} style={{width:"200px"}}>
                            <MenuItem value={0}></MenuItem>
                            <MenuItem value={1}>設備１</MenuItem>
                            <MenuItem value={2}>設備２</MenuItem>
                            <MenuItem value={3}>設備３</MenuItem>
                            <MenuItem value={4}>設備４</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="filled">
                        <InputLabel>設置場所</InputLabel>
                        <Select label="設置場所" value={location} onChange={(event) => setLocation(event.target.value as number)} style={{width:"200px"}}>
                            <MenuItem value={0}></MenuItem>
                            <MenuItem value={1}>設置場所１</MenuItem>
                            <MenuItem value={2}>設置場所２</MenuItem>
                            <MenuItem value={3}>設置場所３</MenuItem>
                            <MenuItem value={4}>設置場所４</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    margin: "20px"
                }}>
                    <Button variant="contained" color="primary">検索</Button>
                    <Button variant="contained" color="primary" onClick={() => {setEquipment(0); setLocation(0); }}>条件解除</Button>
                </div>
            </form>
        </div>
    );
};

export default SearchForm;