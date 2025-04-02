import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function FavoritesButton() {
    return (
        <Button className="cursor-pointer" variant="outline" size="lg">
            <Heart />
            <span className="ml-2">Favorites</span>
        </Button>
    )
}