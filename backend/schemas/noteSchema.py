from typing import Optional
from pydantic import BaseModel, Field

class NoteSchema(BaseModel):
    id: Optional[int] = None
    title: str = Field(min_length=5, max_length=40)
    content: str = Field('')
    archived: Optional[bool] = Field(False, validate_default=True)

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "title": "my note",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing.",
                    "archived": False
                }
            ]
        }
    }
