import { InputGroup, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export default function SearchBox({ placeholder }: { placeholder: string }) {
    return (
        <InputGroup className="w-50">
            <InputGroup.Text>
                <FaSearch />
            </InputGroup.Text>
            <Form.Control
                placeholder={placeholder}
                id="wd-search-assignment"
            />
        </InputGroup>
    );
}