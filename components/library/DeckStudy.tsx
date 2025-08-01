"use client";

import { useState } from "react";
import { Deck, User } from "db/types/models.types";
import { Button } from "components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/Card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "components/ui/Dialog";
import { useRouter } from "next/navigation";
import { Badge } from "components/ui/Badge";
import {
  FlipHorizontal,
  Brain,
  Award,
  ChevronRight,
  Target,
  Zap,
  Info,
  Play,
} from "lucide-react";
import ChallengeSettings from "components/study/dialogs/ChallengeSettings";
import AdaptiveQuizSettings from "components/study/dialogs/AdaptiveQuizSettings";

export const DeckStudy = ({ deck, user }: { deck: Deck; user: User }) => {
  const [numOfRounds, setNumOfRounds] = useState<number>(3);
  const [numOfQuestions, setNumOfQuestions] = useState<number>(10);
  const [showChallengeSettings, setShowChallengeSettings] =
    useState<boolean>(false);
  const [showStudyModeDialog, setShowStudyModeDialog] =
    useState<boolean>(false);
  const [showQuizSettings, setShowQuizSettings] = useState<boolean>(false);
  const [selectedMode, setSelectedMode] = useState<string>("");
  const [isTimed, setIsTimed] = useState<boolean>(false);
  const router = useRouter();

  const handleStudyModeSelect = (mode: string) => {
    if (mode === "flip") {
      router.push(`/workspace/study/flip?deckId=${deck.id}`);
    }
    if (mode === "challenge") {
      setSelectedMode(mode);
      setShowStudyModeDialog(false);
      setShowChallengeSettings(true);
    }
    if (mode === "quiz") {
      setSelectedMode(mode);
      setShowStudyModeDialog(false);
      setShowQuizSettings(true);
    }
  };

  const handleStartStudy = () => {
    router.push(
      `/workspace/study/${selectedMode}?deckId=${deck.id}&numOfRounds=${numOfRounds}&timed=${isTimed}`
    );
  };

  return (
    <Card className="border-muted-foreground/20">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          Study Deck
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-1">
          Choose a study method to review your flashcards
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2">
          <Dialog
            open={showStudyModeDialog}
            onOpenChange={setShowStudyModeDialog}
          >
            <DialogTrigger asChild>
              <Button className="w-full font-medium">
                <Play className="h-4 w-4 mr-2" />
                Study Now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader className="space-y-3">
                <DialogTitle className="text-xl font-semibold">
                  Choose Study Mode
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Select the perfect study method for your learning goals
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-3 py-4">
                <div
                  className="group/mode flex items-center gap-4 p-4 border border-border rounded-lg cursor-pointer hover:border-primary/50 hover:bg-accent/50 transition-all duration-200"
                  onClick={() => handleStudyModeSelect("flip")}
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover/mode:scale-105 transition-transform">
                    <FlipHorizontal className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1">
                      Classic Flip
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Simple flashcard flipping for quick review and
                      memorization
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover/mode:text-foreground group-hover/mode:translate-x-1 transition-all" />
                </div>

                <div
                  className="group/mode flex items-center gap-4 p-4 border border-border rounded-lg cursor-pointer hover:border-primary/50 hover:bg-accent/50 transition-all duration-200"
                  onClick={() => handleStudyModeSelect("challenge")}
                >
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg group-hover/mode:scale-105 transition-transform">
                    <Award className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1">
                      Challenge Mode
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Test your knowledge with multiple choice challenges and
                      compete
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover/mode:text-foreground group-hover/mode:translate-x-1 transition-all" />
                </div>

                <div
                  className="group/mode flex items-center gap-4 p-4 border border-border rounded-lg cursor-pointer hover:border-primary/50 hover:bg-accent/50 transition-all duration-200"
                  onClick={() => handleStudyModeSelect("quiz")}
                >
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover/mode:scale-105 transition-transform">
                    <Brain className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">
                        Adaptive Quiz
                      </h3>
                      <Badge className="bg-primary text-primary-foreground text-xs px-2 py-0.5 font-semibold">
                        <Zap className="h-3 w-3 mr-1" />
                        AI
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Smart quizzes that adapt to your learning progress and
                      weak spots
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover/mode:text-foreground group-hover/mode:translate-x-1 transition-all" />
                </div>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border/50">
                  <h4 className="text-sm font-medium flex items-center gap-2 mb-2">
                    <Info className="h-4 w-4 text-primary" />
                    Adaptive Quiz Requirements
                  </h4>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-5">
                    <li>Complete Challenge Mode at least 3 times</li>
                    <li>Achieve at least 10% mastery in this deck</li>
                    <li>Have at least 1 energy available</li>
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>

      <ChallengeSettings
        showChallengeSettings={showChallengeSettings}
        setShowChallengeSettings={setShowChallengeSettings}
        handleStartStudy={handleStartStudy}
        numOfRounds={numOfRounds}
        setNumOfRounds={setNumOfRounds}
        isTimed={isTimed}
        setIsTimed={setIsTimed}
      />
      <AdaptiveQuizSettings
        showQuizSettings={showQuizSettings}
        setShowQuizSettings={setShowQuizSettings}
        numOfQuestions={numOfQuestions}
        setNumOfQuestions={setNumOfQuestions}
        deckId={deck.id}
        user={user}
      />
    </Card>
  );
};
